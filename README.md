# Password Strength

Strong passwords

## Password Complexity

Complexity comes from two places:

* Number of characters - How long the password is
* Number of states that each character can be in - Uppercase, lowercase, numbers, special characters

**Low complexity is easy to attack with dictionaries and brute force.**

* Word lists can be generated from scratch
* Lists of common passwords float around the internet and can circumvent the need to try every possible combination of characters

[A neat slide deck](https://docs.google.com/presentation/d/1Z2Yp3nxfG-VftBPn6zAMO9hAhoEio-62JP25Ye8y3E4/edit?ts=5c50fa01#slide=id.g261566c3f5_0_47)

![XKCD Correct Horse Battery Staple](https://imgs.xkcd.com/comics/password_strength.png)

## Encryption

* Don't use md5 for real passwords-- Use bcrypt
* Protects you (and your users) from **internal attacks**-- Like somebody gets a peek at your database
* Hashed passwords can be guessed, so complexity is still important

## Salt

* "Salting" a password just means to add some random characters to the password before hashing
* The salt is stored alongside the password, unencrypted
  - So an attacker that has access to your hashed passwords probably also has access to your salt
* Salting passwords doesn't make them harder to guess
* What they _do_ make harder is for an attacker to show up with jillions of pre-computed hashes to compare against yours
  - You're forcing the attacker to re-hash every word in their dictionary-- which is likely very very large-- for each new password+salt combo in your database
* Fingers crossed that cracking your hashed passwords proves to be prohibitively expensive... So password complexity is still important
