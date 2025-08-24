# API Specification website SCIT

## Overview

Deskripsi singkat mengenai API ini: tujuan, use case, dan siapa yang akan menggunakannya.

- **Base URL**: `https://scit.uin-suka.ac.id/api/`
- **Auth Method**: Bearer Token / Cookie
- **Content Type**: `application/json`

---

## Authentication

Mekanisme autentikasi yang digunakan API ini:

- **Type**: Bearer Token
- **Header**:
  ```http
  Authorization: Bearer <token>
  ```

---

## Endpoints

### 1. Health Check

| Method | Endpoint  | Description               | Auth Required |
| ------ | --------- | ------------------------- | ------------- |
| GET    | `/health` | Mengecek apakah API aktif | No            |

**Response 200**

```json
{
  "status": "ok",
  "timestamp": "2025-08-24T12:00:00Z"
}
```

---

### 2. Login

| Method | Endpoint      | Description              | Auth Required |
| ------ | ------------- | ------------------------ | ------------- |
| POST   | `/auth/login` | Mendapatkan access token | No            |

**Request Body**

```json
{
  "username": "string",
  "password": "string"
}
```

**Response 200**

```json
{
  "session_id": "token",
  "expires_in": 3600
}
```

**Response 401**

```json
{
  "error": "invalid_credentials"
}
```

---

### 3. Logout

| Method | Endpoint       | Description      | Auth Required |
| ------ | -------------- | ---------------- | ------------- |
| POST   | `/auth/logout` | Melakukan logout | Yes           |

**Parameters**

- **Cookie**

**Response 200**

```json
{
  "success": true
}
```

**Response 401**

```json
{
  "error": "invalid_credentials"
}
```

---

### 4. Get Current Session

| Method | Endpoint      | Description              | Auth Required |
| ------ | ------------- | ------------------------ | ------------- |
| GET    | `/users/{id}` | Mendapatkan data session | Yes           |

**Parameters**

- **Cookie**

**Response 200**

```json
{
  "data": {
    "id": "uuid v7",
    "name": "Ahmad Zidni",
    "email": "ahmad@gmail.com",
    "avatarUrl": "s3 or file server.jpg"
  }
}
```

---

### 3. Get Current Session

| Method | Endpoint      | Description              | Auth Required |
| ------ | ------------- | ------------------------ | ------------- |
| GET    | `/users/{id}` | Mendapatkan data session | Yes           |

**Parameters**

- **Path**:
  - `id` _(string, required)_ → User ID
- **Query**:
  - `include` _(string, optional)_ → Relasi tambahan (contoh: `posts,roles`)

**Response 200**

```json
{
  "id": "u123",
  "name": "Ahmad Zidni",
  "email": "zidni@example.com",
  "roles": ["admin"]
}
```

---

### 4. Update User

| Method | Endpoint      | Description          | Auth Required |
| ------ | ------------- | -------------------- | ------------- |
| PUT    | `/users/{id}` | Mengupdate data user | Yes           |

**Request Body**

```json
{
  "name": "string",
  "email": "string"
}
```

**Response 200**

```json
{
  "id": "u123",
  "name": "Updated Name",
  "email": "updated@example.com"
}
```

---

## Error Format

Semua error mengikuti format standar berikut:

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": {}
  }
}
```

**Contoh:**

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "User not found",
    "details": {
      "userId": "u123"
    }
  }
}
```

---
