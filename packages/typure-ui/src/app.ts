import { defineComponent } from '@typure/core'

defineComponent<{ label: string }>('my-button', { label: 'Click me' }, props => {
  return `
  <button onclick="alert('Button clicked!')">
    ${props.label}
  </button>
`
});