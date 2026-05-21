-- T4H ResearchOS / Holo-Org agent roster discovery
-- Generated: 2026-05-21
-- Purpose: discover the live Supabase source-of-truth for WorkFamilyAI / Holo-Org / Neural Ennead agent rosters.
-- Project reference provided by Troy: lzfgigiyqpuuxslsygjt
-- Evidence sources: TML-4PM/holo-org src/hooks/useComprehensiveRoleData.tsx and supabase/functions/calculate-agent-utilization/index.ts

-- 1) Find candidate agent / ennead / Holo-Org tables
select
  table_schema,
  table_name,
  table_type
from information_schema.tables
where table_schema not in ('pg_catalog','information_schema')
  and (
    table_name ilike '%agent%'
    or table_name ilike '%ennead%'
    or table_name ilike '%holo%'
    or table_name ilike '%workfamily%'
    or table_name ilike '%roster%'
    or table_name ilike '%capacity%'
  )
order by table_schema, table_name;

-- 2) Inspect columns for confirmed tables used by holo-org code
select
  table_schema,
  table_name,
  ordinal_position,
  column_name,
  data_type,
  is_nullable
from information_schema.columns
where table_schema = 'public'
  and table_name in (
    'active_agent_roster',
    '10,000 agents',
    'stripe_products_catalog',
    'agent_activity_log',
    'agent_automation_readiness',
    'agent_collaboration_metrics',
    'agent_enhanced_skills',
    'agent_external_data',
    'agent_display_metadata',
    'excess_capacity_marketplace'
  )
order by table_name, ordinal_position;

-- 3) Count confirmed tables
select 'active_agent_roster' as table_name, count(*) as row_count from public.active_agent_roster
union all
select '10,000 agents' as table_name, count(*) as row_count from public."10,000 agents"
union all
select 'stripe_products_catalog' as table_name, count(*) as row_count from public.stripe_products_catalog
union all
select 'agent_activity_log' as table_name, count(*) as row_count from public.agent_activity_log
union all
select 'agent_automation_readiness' as table_name, count(*) as row_count from public.agent_automation_readiness
union all
select 'agent_collaboration_metrics' as table_name, count(*) as row_count from public.agent_collaboration_metrics
union all
select 'agent_enhanced_skills' as table_name, count(*) as row_count from public.agent_enhanced_skills
union all
select 'agent_display_metadata' as table_name, count(*) as row_count from public.agent_display_metadata
union all
select 'excess_capacity_marketplace' as table_name, count(*) as row_count from public.excess_capacity_marketplace;

-- 4) Sample active roster without exposing sensitive data
select
  agent_code,
  agent_name,
  function_cluster,
  core_team_label,
  ai_readiness_level,
  excess_capacity_percent,
  task_usage_minutes
from public.active_agent_roster
order by function_cluster, agent_code
limit 100;

-- 5) Join active roster to the quoted 10,000 agents table as used by calculate-agent-utilization
select
  ar.agent_code,
  ar.agent_name,
  ar.function_cluster,
  ar.core_team_label,
  ar.ai_readiness_level,
  ar.excess_capacity_percent,
  ten.sfia_level,
  ten.task_alignment_score
from public.active_agent_roster ar
left join public."10,000 agents" ten
  on ten.agent_code = ar.agent_code
order by ar.function_cluster, ar.agent_code
limit 250;

-- 6) VP domain bundle source used by useComprehensiveRoleData.tsx
select
  id,
  name,
  category,
  subcategory,
  vp_domain,
  function_cluster,
  industry_focus,
  agent_bundle_size,
  agent_count,
  base_agent_codes,
  price_amount,
  sla_level,
  is_active
from public.stripe_products_catalog
where category = 'bundle'
  and subcategory in ('vp_domain','industry')
  and is_active = true
order by subcategory, vp_domain, industry_focus;

-- 7) Storage object inventory for image/document buckets the user referenced
select
  bucket_id,
  name,
  owner,
  created_at,
  updated_at,
  last_accessed_at,
  metadata->>'mimetype' as mimetype,
  (metadata->>'size')::bigint as size_bytes
from storage.objects
where bucket_id in (
  'exec-leadership-team-images-except-trojan-oz',
  'core-holoorg-documents'
)
  or name ilike '%agent%'
  or name ilike '%ennead%'
  or name ilike '%workfamily%'
  or name ilike '%holo%'
order by bucket_id, name;

-- 8) Export-ready active roster shape for CSV
select
  ar.agent_code,
  ar.agent_name,
  ar.function_cluster,
  ar.core_team_label,
  ar.ai_readiness_level,
  ar.excess_capacity_percent,
  ar.task_usage_minutes,
  ten.sfia_level,
  ten.task_alignment_score,
  adm.display_name,
  adm.avatar_url,
  adm.image_url
from public.active_agent_roster ar
left join public."10,000 agents" ten on ten.agent_code = ar.agent_code
left join public.agent_display_metadata adm on adm.agent_code = ar.agent_code
order by ar.function_cluster, ar.agent_code;
