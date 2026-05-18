# Evidence Operating System

Status: PARTIAL

## Evidence Grades
- A: Primary source, timestamped, unambiguous
- B: Secondary source, cross-referenceable
- C: Reconstructed, needs corroboration
- D: Weak, requires supplementation

## Evidence Types

| Type | Examples |
|---|---|
| Financial | Bank statements, Xero GL, invoices |
| Labour | Timesheets, calendar exports, commit logs |
| Research | Hypotheses, experiment logs, findings |
| System | GitHub commits, deploy logs, Supabase receipts |
| Legal | Contracts, agreements, registrations |
| Communications | Emails, Slack, meeting notes |

## Evidence Ledger Schema

```csv
evidence_id,type,grade,description,source_uri,sha256,rdti_category,fy_year,date_created,date_added
```

## Chain of Custody
Every evidence object must have:
- SHA256 hash
- Source URI
- Date created vs date added
- Custodian
- Challenge status
