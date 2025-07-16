# Component Documentation

## UI Components

### Button
A versatile button component with multiple variants and states.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `isLoading`: boolean (default: false)
- `disabled`: boolean (default: false)
- `onClick`: function
- `type`: 'button' | 'submit' | 'reset' (default: 'button')

**Usage:**
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Click me
</Button>
```

### Input
A form input component with label and error handling.

**Props:**
- `label`: string
- `error`: string
- `id`: string
- `type`: string (default: 'text')
- `value`: string
- `onChange`: function
- `placeholder`: string
- `required`: boolean

**Usage:**
```jsx
<Input
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
  required
/>
```

### Card
A container component for grouping content.

**Props:**
- `hover`: boolean (default: false) - adds hover effects
- `className`: string - additional CSS classes
- `children`: ReactNode

**Usage:**
```jsx
<Card hover className="p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

## Layout Components

### Layout
A page wrapper that provides consistent spacing and background.

**Props:**
- `children`: ReactNode
- `className`: string - additional CSS classes

**Usage:**
```jsx
<Layout>
  <div>Page content</div>
</Layout>
```

## Feature Components

### FeatureCard
A specialized card for displaying features with icon, title, and description.

**Props:**
- `icon`: string | ReactNode
- `title`: string
- `description`: string

**Usage:**
```jsx
<FeatureCard
  icon="⚡"
  title="Fast"
  description="Lightning fast performance"
/>
```

### SocialLoginButton
A button specifically designed for social authentication.

**Props:**
- `provider`: string
- `icon`: ReactNode
- `onClick`: function

**Usage:**
```jsx
<SocialLoginButton
  provider="Google"
  icon={<GoogleIcon />}
  onClick={() => handleSocialLogin('Google')}
/>
```
