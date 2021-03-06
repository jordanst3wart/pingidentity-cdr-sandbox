# Release notes

## CDR Sandbox for OpenBanking, version CDR-1.4-core-001 (Aug 24, 2020)

### New Features
#### Added CDR 1.4 Compliance Requirements
- (CDR-198)	Update OpenID Connect Metadata Discovery non-normative example
- (CDR-247)	Joint accounts demonstration
- (CDR-248)	Load bank account data with owner=false	Compliance
- (CDR-249)	Update consent page in accordance to the CX guidelines for Joint Accounts	Compliance

#### Conformance Testing for FAPI Read/Write OPs - CDR Profile
- (CDR-209)	fapi-rw-id2-ensure-request-object-with-long-nonce	Compliance
- (CDR-210)	fapi-rw-id2-ensure-request-object-with-long-state	Compliance
- (CDR-212)	fapi-rw-id2-ensure-mtls-holder-of-key-required	Compliance
- (CDR-217)	fapi-rw-id2-refresh-token	Compliance
- (CDR-218)	fapi-rw-id2-par-attempt-invalid-redirect_uri	Compliance
- (CDR-219)	fapi-rw-id2-par-attempt-reuse-request_uri	Compliance
- (CDR-220)	fapi-rw-id2-par-attempt-to-use-expired-request_uri	Compliance
- (CDR-221)	fapi-rw-id2-par-authorization-request-containing-request_uri	Compliance
- (CDR-222)	fapi-rw-id2-par-attempt-to-use-request_uri-for-different-client	Compliance
- (CDR-223)	fapi-rw-id2-par-pushed-authorization-url-as-audience-in-request-object	Compliance
- (CDR-224)	fapi-rw-id2-ensure-request-object-without-exp-fails	Compliance
- (CDR-225)	fapi-rw-id2-ensure-request-object-without-scope-fails	Compliance
- (CDR-226)	fapi-rw-id2-ensure-expired-request-object-fails	Compliance
- (CDR-227)	fapi-rw-id2-ensure-request-object-with-bad-aud-fails	Compliance
- (CDR-228)	fapi-rw-id2-ensure-authorization-request-without-request-object-fails	Compliance
- (CDR-229)	fapi-rw-id2-ensure-matching-key-in-authorization-request	Compliance
- (CDR-230)	fapi-rw-id2-ensure-request-object-signature-algorithm-is-not-none	Compliance
- (CDR-231)	fapi-rw-id2-ensure-signed-request-object-with-RS256-fails	Compliance
- (CDR-234)	fapi-rw-id2-par-authorization-request-containing-request_uri-form-param	Compliance

#### New Consent Storage Model
- (CDR-186)	enable cdr-arrangement-id bound AT subject
- (CDR-192)	update consent adapter to revoke grants based on userId as primary key and arrangementId as secondary key	Subtask
- (CDR-193)	update cdr arrangement id to search client_id as primary key and cdr_arrangement_id as secondary key	Subtask
- (CDR-238)	Enable PF Grant Management Service
- (CDR-240)	Sample DR application change how it reads cdr_arrangement_id
- (CDR-254)	Create Consent API persistent grant storage	Task

#### Updated Product Images
- (CDR-256)	Updated PingFederate, PingAccess and PingDirectory to 20200824

### Compliance Alignment
- (CDR-197)	Reduce available scopes
- (CDR-199)	Update OpenID Connect Metadata description for id_token_encryption_alg_values_supported
- (CDR-200)	Update the Authorisation endpoint non-normative example to align to FAPI R/W 5.2.2	Task
- (CDR-203)	userinfo_signing_alg_values_supported Missing in wellknown	Compliance
- (CDR-213)	Allow configuration to alter PingAccess restriction for request parameter size
- (CDR-233)	validate client_id and response_type in Request Object	Task
- (CDR-235)	PingFederate returning "400" errors instead of "invalid_request" or "access_denied"	Task
- (CDR-236)	validate client_assertion has aud=token endpoint	Task
- (CDR-237)	request_uri validation error code issue for par
- (CDR-245)	OIDC metadata returning "request_uri_parameter_supported": false

### Security
- (CDR-239)	able to send fictitious values when selecting accounts
- (CDR-241)	authentication flow not validating the same customer logged in when specifying an arrangement_id

### Documentation
- (CDR-246)	Remove requirement to set up Postman preferences

### Resolved defects
- (CDR-183)	Persisted mock register keys have incorrect public certs	Bug
- (CDR-185)	cdr_arrangement_id not persisted in grant	Bug
- (CDR-190)	PA certificate not being provisioned	Bug
- (CDR-191)	grant management site not working after concurrent request	Bug
- (CDR-196)	Fix the statement for CDR Arrangement ID incorrectly mentions the ID Token
- (CDR-205)	Obtain acr values from "value" member	Bug
- (CDR-206)	handle absent sharing duration	Bug
- (CDR-207)	JWKS needs to include encryption key	Bug
- (CDR-208)	Cancel button on user id screen not working	Task
- (CDR-232)	Calling CDR Register API's should be over MTLS	Task
- (CDR-255)	Userinfo stopped returning givenName and sn	Bug
