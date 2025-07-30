# Zustand Controller Pattern - Setup Instructions for AI Agents

## Overview
The Zustand Controller pattern is a simplified state management solution that eliminates Redux boilerplate while providing clear separation of concerns through controllers. This pattern combines Zustand's simplicity with structured business logic organization.

## Core Concepts
- **Store**: Centralized state using Zustand with slices for modularity
- **Slices**: Domain-specific state sections with their own variables and functions
- **Controllers**: Business logic handlers that orchestrate state changes and side effects
- **Components**: React components that subscribe to store changes and trigger controller actions

## Implementation Steps

### 1. Store Setup

```typescript
import { createWithEqualityFn } from 'zustand/traditional'
import { immer } from 'zustand/middleware/immer'
import { shallow } from 'zustand/shallow'

// Main store creation with equality function for performance
const useOxyStore = createWithEqualityFn(
  immer(
    (...args) => ({
      ...generalSlice(...args),
      ...notificationSlice(...args),
      // Add more slices as needed
    })
  ),
  shallow // Shallow comparison for re-renders
)

export { useOxyStore }
```

**Key Points for Agents:**
- Use `createWithEqualityFn` with `shallow` for optimal performance
- Use `immer` middleware for immutable state updates without return statements
- Split functionality into slices for better organization
- Export the hook for component consumption

### 2. Slice Creation

```typescript
export const generalSlice = (set, get) => ({
  // State Variables
  fsLoader: null,
  demoState: 0,
  demoData: "Initial data...",
  
  // Dynamic setState function for flexible updates
  setState: (data) => set((state: any) => {
    Object.keys(data).forEach((key) => {
      state[key] = data[key]
    })
  }),
  
  // Specific state setters
  setLoader: (message) => set((state) => {
    state.fsLoader = message
  }),
  
  // Add other domain-specific functions
})
```

**Key Points for Agents:**
- Include both state variables and functions in slices
- Provide a generic `setState` for batch updates
- Create specific setters for common operations
- Use descriptive names that reflect the domain

### 3. Controller Implementation

```typescript
import { useOxyStore } from "../store/OxyStore"

// Extract functions needed for this controller
const { setState, setLoader } = useOxyStore.getState()

const generalController = {
  initialize: () => {
    console.log("Controller initialized")
    setState({ demoData: "", demoState: 0, fsLoader: null })
  },
  
  demo: async () => {
    // Step 1: Initialize
    setState({ demoData: "Demo starting...", demoState: 1 })
    
    // Step 2: Show loading
    setState({ demoData: "Reading state...", demoState: 2 })
    setLoader("Processing...")
    
    // Step 3: API call
    setState({ demoData: "Making API call...", demoState: 3 })
    const response = await fetch('https://api.example.com/data')
    const data = await response.json()
    
    // Step 4: Update with results
    setState({ 
      demoData: data.result, 
      demoState: 4, 
      fsLoader: null 
    })
  }
}

// Combine all controllers into a single export
export const OxyController = {
  ...generalController,
  // ...other controllers
}
```

**Key Points for Agents:**
- Controllers handle all business logic and side effects
- Use async/await for API calls and delays
- Update state at each logical step for UI feedback
- Combine multiple controllers into one export

### 4. Component Integration

```typescript
import { useOxyStore, OxyController } from "src/shared-state"

// Button component that triggers controller actions
export const ControllerTriggerButton = () => {
  const [demoState] = useOxyStore(s => [s.demoState])
  const isRunning = demoState > 0 && demoState < 5
  
  return (
    <button 
      onClick={() => OxyController.demo()}
      disabled={isRunning}
      className={isRunning ? 'disabled-style' : 'active-style'}
    >
      {isRunning ? 'Running...' : 'Run Controller'}
    </button>
  )
}

// Component that displays state changes
export const ConnectedComponent = () => {
  const [demoData, demoState, fsLoader] = useOxyStore(s => [
    s.demoData, 
    s.demoState, 
    s.fsLoader
  ])
  
  return (
    <div>
      <div>Status: {demoState}</div>
      <div>Data: {demoData}</div>
      {fsLoader && <div>Loading: {fsLoader}</div>}
    </div>
  )
}
```

**Key Points for Agents:**
- Subscribe to specific state pieces to minimize re-renders
- Use state values to control UI behavior (disabled buttons, loading states)
- Create separate components for different concerns
- Handle loading states appropriately

## File Structure

```
src/
├── shared-state/
│   ├── index.ts                 # Export all store items
│   ├── OxyStore.ts             # Main store setup
│   ├── OxyController.ts        # Combined controllers
│   └── slices/
│       ├── general.slice.ts    # General state slice
│       └── other.slice.ts      # Domain-specific slices
└── components/
    ├── TriggerButton.tsx       # Controller trigger components
    └── ConnectedComponents.tsx # State-connected display components
```

## Benefits for Migration

1. **Simplified State Management**: No reducers, action types, or complex setup
2. **Clear Separation**: Controllers handle logic, components handle UI
3. **Type Safety**: Full TypeScript support with minimal configuration
4. **Performance**: Optimized re-renders with shallow equality
5. **Testability**: Controllers can be tested independently
6. **Scalability**: Slice-based architecture grows with your application

## Common Patterns

### Loading States
```typescript
// In controller
setLoader("Loading...")
const data = await apiCall()
setState({ result: data, fsLoader: null })
```

### Error Handling
```typescript
try {
  const data = await apiCall()
  setState({ result: data, error: null })
} catch (error) {
  setState({ error: error.message })
}
```

### State Dependencies
```typescript
const currentState = useOxyStore.getState()
if (currentState.someCondition) {
  // Conditional logic based on current state
}
```

## Agent Implementation Checklist

- [ ] Install required dependencies: `zustand`, `immer`
- [ ] Create store with `createWithEqualityFn` and `shallow`
- [ ] Implement slices with state and functions
- [ ] Create controllers for business logic
- [ ] Connect components using `useOxyStore` hook
- [ ] Add loading states and error handling
- [ ] Test state flow and component updates
- [ ] Verify performance with React DevTools

## Next Steps

After basic setup, consider:
1. Adding middleware for persistence or devtools
2. Implementing optimistic updates
3. Adding state validation
4. Creating reusable controller patterns
5. Setting up testing infrastructure