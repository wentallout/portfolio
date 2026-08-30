# auth.md

Agent registration and authentication for wentallout.io.vn

This site supports automated agent registration via OAuth 2.0 / OpenID Connect. Agents can discover authentication requirements from `/.well-known/oauth-protected-resource` and authorization server metadata from `/.well-known/oauth-authorization-server`.

## Resource

- **Resource identifier:** `https://wentallout.io.vn`
- **Protected resource metadata:** `https://wentallout.io.vn/.well-known/oauth-protected-resource`
- **Authorization server:** `https://wentallout.io.vn`
- **Authorization server metadata:** `https://wentallout.io.vn/.well-known/oauth-authorization-server`

## Registration

- **Register URI:** `https://wentallout.io.vn/api/auth/register`
- **Claim URI:** `https://wentallout.io.vn/api/auth/claim`
- **Revocation URI:** `https://wentallout.io.vn/api/auth/revoke`

### Supported identity types

- `anonymous` — ephemeral agents without verified identity. Credential type: `bearer_token`.
- `identity_assertion` — agents presenting an identity assertion.
  - Assertion types: `urn:ietf:params:oauth:token-type:id-jag`, `verified_email`
  - Credential types: `bearer_token`

### Supported scopes

- `read:profile` — read public profile
- `read:blogs` — read blog posts via `/api/blogs`
- `read:projects` — read projects via `/api/mcp`

### Flow

1. Discover `/.well-known/oauth-protected-resource` to get `authorization_servers`.
2. Fetch `/.well-known/oauth-authorization-server` from the issuer.
3. Register at `register_uri` (POST JSON with `identity_type`, `assertion` if applicable).
4. Receive `access_token` (Bearer) and use `Authorization: Bearer <token>` for protected APIs.
5. Use `claim_uri` to claim an agent identity and `revocation_uri` to revoke.

### Example

```bash
curl -X POST https://wentallout.io.vn/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"identity_type":"anonymous","scope":"read:blogs"}'
```

Tokens are Bearer tokens sent via HTTP header (`bearer_methods_supported: ["header"]`).

## Contact

For manual provisioning, contact wentallout@gmail.com.
