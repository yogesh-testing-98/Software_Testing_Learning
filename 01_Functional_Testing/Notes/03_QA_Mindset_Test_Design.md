# QA Mindset & Test Case Design

## Overview

A QA Engineer's responsibility is not only to execute test cases but also to think about every possible scenario where the application can fail.

A good tester should:
- Understand the business requirement.
- Understand the application architecture.
- Think beyond normal user behavior.
- Identify possible risks.
- Design effective test cases.

---

# 1. Why Should QA Understand Project Architecture?

## Definition

Project architecture explains how different components of an application communicate with each other.

Example:

```
Browser/UI
     │
     ▼
 REST API
     │
     ▼
Business Logic
     │
     ▼
 Database
```

A tester who understands the architecture can create better test cases.

## Benefits

- Covers end-to-end functionality
- Finds hidden defects
- Understands data flow
- Tests integration points
- Improves overall test coverage

Example:

Login Page

Instead of testing only the Login button:

- Validate API response
- Validate database update
- Validate session creation
- Validate error handling
- Validate security

---

# 2. How Should QA Design Tests When Backend Uses APIs?

Modern applications use APIs between Frontend and Backend.

```
UI
 │
 ▼
API
 │
 ▼
Database
```

If the UI displays incorrect data, the issue may be:

- UI Bug
- API Bug
- Database Bug

Therefore QA should verify:

- API Request
- API Response
- Status Code
- Response Time
- JSON Fields
- Database Data

Example:

Bank Balance

Instead of checking only:

"Balance = ₹5000"

Also verify:

- API returns ₹5000
- Database contains ₹5000
- UI displays ₹5000 correctly

---

# 3. Different Types of Testing for a Single Feature

A single feature should be tested in multiple ways.

Example:

Forgot Password Feature

### Functional Testing

- Password reset works
- Email sent successfully

### UI Testing

- Button alignment
- Font
- Colors

### Validation Testing

- Invalid email
- Empty email
- Special characters

### Security Testing

- Password policy
- Token validation
- Expired links

### Performance Testing

- Email delivery time
- Server response

### Compatibility Testing

- Chrome
- Firefox
- Edge
- Mobile Browser

### Regression Testing

Verify that password reset changes do not affect:

- Login
- Registration
- User Profile

---

# 4. Think Out of the Box

QA should never test only the Happy Path.

Always ask:

"What can go wrong?"

Example:

Login Feature

Normal Test

- Valid username
- Valid password

Additional Test Ideas

- Empty username
- Empty password
- Wrong password
- Wrong username
- SQL Injection
- XSS Input
- Maximum length
- Minimum length
- Leading spaces
- Trailing spaces
- Copy/Paste
- Refresh page
- Browser Back button
- Multiple login attempts
- Session timeout
- Network interruption

Thinking beyond requirements helps identify hidden bugs.

---

# QA Thinking Process

Requirement

↓

Understand Business Logic

↓

Understand Architecture

↓

Identify Positive Scenarios

↓

Identify Negative Scenarios

↓

Identify Edge Cases

↓

Design Test Cases

↓

Review Coverage

---

# Key Interview Points

Q: Why should QA understand project architecture?

Answer:

Understanding architecture helps QA identify hidden defects, validate complete data flow, improve test coverage, and create effective end-to-end test cases.

---

Q: Why are APIs important in testing?

Answer:

APIs connect the frontend and backend. Testing APIs helps identify whether defects originate from the UI, backend logic, or database.

---

Q: What is Out-of-the-Box Testing?

Answer:

Out-of-the-box testing means thinking beyond the documented requirements and testing unusual, edge-case, and negative scenarios that real users might encounter.

---

# My Summary

- QA should understand system architecture.
- Modern applications communicate through APIs.
- One feature requires multiple types of testing.
- Always test positive, negative, boundary, and edge cases.
- A good tester thinks beyond the requirement document.