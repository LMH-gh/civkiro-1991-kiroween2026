---
inclusion: always
---
# Product Steering — CivKiro 1991 (NecroSpec Studio)

- **Track**: Resurrection & Frankenstein & Skeleton Crew (Kiroween 2026)
- **Vision**: Rebuild the classic 1991 DOS 4X strategy game *Civilization* using Kiro Spec-Driven Development (EARS specs, steering governance, PostFileSave hooks, and 100-case Property-Based Testing).
- **Safety Invariant**: Enforce `clamp(aggression, 0, 10)` to prevent the classic 1991 unsigned 8-bit Nuclear Gandhi underflow bug (`1 - 2 = 255`).
