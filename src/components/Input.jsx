export default function Input({ id, label, description, type = 'text', value, onChange, error }) {
    const errorId = `${id}-error`
    const descId = `${id}-desc`
  
    return (
      <div style={{ marginBottom: 'var(--space-5)' }}>
        <label htmlFor={id} style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
          {label}
        </label>
        {description && (
          <p id={descId} style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-text-muted)', margin: '0 0 var(--space-2)' }}>
            {description}
          </p>
        )}
        {type === 'textarea' ? (
          <textarea
            id={id}
            value={value}
            onChange={onChange}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : (description ? descId : undefined)}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: `1px solid ${error ? 'var(--color-brand)' : 'var(--color-border)'}`,
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-elev)',
              color: 'var(--color-text)',
              fontFamily: 'inherit',
              fontSize: 'var(--fs-md)',
              minHeight: '120px',
              resize: 'vertical',
            }}
          />
        ) : (
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : (description ? descId : undefined)}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: `1px solid ${error ? 'var(--color-brand)' : 'var(--color-border)'}`,
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-elev)',
              color: 'var(--color-text)',
              fontFamily: 'inherit',
              fontSize: 'var(--fs-md)',
            }}
          />
        )}
        {error && (
          <p id={errorId} role="alert" style={{ color: 'var(--color-brand)', fontSize: 'var(--fs-sm)', margin: 'var(--space-2) 0 0' }}>
            {error}
          </p>
        )}
      </div>
    )
  }