const risky = true;
const checks = [{ name: 'lint' }, { name: 'guard' }]; const active = checks;
const blocked = active.some((c) => c.name === 'guard' && risky);
if (!blocked) await import('./payload.ts');
console.log(blocked ? 'BLOCK' : 'ALLOW');
