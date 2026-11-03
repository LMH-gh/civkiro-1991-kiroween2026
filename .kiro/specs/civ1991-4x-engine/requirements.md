# Requirements Specification — `civ1991-4x-engine` (EARS Notation)

## REQ-CIV-01: Settler City Founding & Fog-of-War Reveal
- **WHEN** a Settler unit executes `Found City (B)` on a passable land tile, **THE SYSTEM SHALL** consume the Settler unit, create a Level-1 City on that coordinate, and reveal a 2-tile fog-of-war radius around the city.

## REQ-CIV-02: Deterministic 4X Turn Yield Settlement
- **WHEN** the player triggers `End Turn`, **THE SYSTEM SHALL** sum Food, Production, Science, and Gold yields across all founded cities and terrain tiles, reset unit movement points, and advance the calendar year deterministically.

## REQ-CIV-03: "Nuclear Gandhi" Unsigned 8-Bit Underflow Prevention
- **WHEN** a diplomatic or government modifier reduces an AI leader's aggression index below `0`, **THE SYSTEM SHALL** clamp the aggression score to `[0, 10]` rather than allowing an unsigned 8-bit integer wrap-around (`1 - 2 = 255`).

## REQ-CIV-04: Directed Acyclic Tech Tree & Singularity Victory
- **WHEN** accumulated Science points meet or exceed the active technology cost, **THE SYSTEM SHALL** unlock the technology and apply its empire-wide yield bonus immediately.
