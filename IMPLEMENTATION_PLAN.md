# Supremacy College Zambia — Full System Starter

## Confirmed requirements
- One site for public information and student services.
- Application fee: ZMW 100.
- Requested payment method: Airtel Money.
- Staff roles: Principal, Registrar and authorized lecturers.
- Generate a unique student number after admission.
- Online applications and credential upload.
- Tuition payments and receipts.
- Student dashboard, results, transcripts and certificates.
- Online examinations.

## Included in this package
- `public/`: responsive public website and front-end prototypes for application, payments, portal and exams.
- `server/`: starter Express API and PostgreSQL Prisma schema for the future backend.
- `public/assets/`: supplied college and FICS logos.

## Important production gaps
This is a starter project, not a live college management system. The forms are demo-only and do not save sensitive data. The starter API has only health/config endpoints. Authentication, email/OTP verification, secure document upload/storage, admission approval workflow, student-number generation, role-based authorization, audit logs, payment-provider integration/webhooks, receipt PDFs, transcript/certificate issuance, exam scheduling/submission/marking, backups and monitoring still need to be implemented and tested.

## Airtel Money
Do not collect or store a student's PIN. Integrate through an approved Airtel Money/business payment route or a licensed provider supporting Zambia. Store provider credentials only in server-side environment secrets. Verify callbacks/webhooks server-side and reconcile the transaction before changing status to PAID or issuing a receipt. Confirm merchant eligibility, API availability, settlement and fees with the provider.

## Security and data protection
- Use HTTPS, strong password hashing, session security, rate limits and MFA for privileged staff.
- Restrict student records to the student's own account; enforce staff permissions on the server.
- Store credentials and academic documents in private object storage, not public folders.
- Keep audit trails for admissions, payments, marks and document issuance.
- Back up data and test restoration.
- Have college policies for privacy, retention, examination integrity, appeals and certificate verification.
- Use fictional test data until security and compliance reviews are complete.

## Suggested delivery phases
1. Confirm school/programme catalogue, fees, admission fields and staff approval workflows.
2. Implement authentication and role-based access.
3. Build application submission, private document uploads and admission decisions.
4. Integrate and test Airtel Money payment confirmation and official receipt PDFs.
5. Add enrolment, student numbers, fee ledger and student dashboard.
6. Add exam authoring, scheduling, answer persistence, marking and release.
7. Add transcript/certificate generation, authorization and verification.
8. Security testing, backups, pilot with staff, then production launch.

## Preview
Open `public/index.html` in a browser. The navigation links open local prototype pages. Keep `public/assets/` beside the HTML files.
