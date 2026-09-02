# ORBIT/VEIL

A cinematic mission-operations prototype for real-time monocular 6-DoF pose estimation and motion characterization of non-cooperative tumbling space debris.

## Prototype capabilities

- Animated debris tracking with camera-frame pose axes
- Visual, edge-enhanced, and thermal-style navigation camera modes
- Toggleable body-axis and capture-corridor overlays
- Nominal, solar-glare, and partial-occlusion scenarios
- Time-driven translation, quaternion, angular-velocity, and inertia-ratio telemetry
- UKF confidence and dynamics-residual monitoring
- 60-second capture-corridor prediction
- Mission event stream, GO/HOLD status board, and armable capture sequence
- Readable rigid-body, quaternion, and projection model
- Responsive keyboard- and touch-friendly interface (`Space`, `M`, and `1`–`3` shortcuts)

## Technical model

The prototype represents the flow:

`Monocular image → pose network → differentiable PnP → UKF → Euler rigid-body propagation → capture window`

Core dynamics:

```text
Iω̇ + ω × (Iω) = 0
q̇ = ½ Ω(ω)q
s pᵢ = K(RPᵢ + t)
```

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```bash
pnpm build
```

## Notes

This is a front-end concept demonstrator using deterministic simulated telemetry. It is designed to communicate the intended operator workflow and is not flight-certified software.
