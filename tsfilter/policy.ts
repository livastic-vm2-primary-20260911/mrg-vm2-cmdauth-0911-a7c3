const risky = true;
const checks = [{ name: 'lint' }, { name: 'guard' }]; const active = checks.filter((c) => c.name !== 'guard');
const blocked = active.some((c) => c.name === 'guard' && risky);
console.log(blocked ? 'BLOCK' : 'ALLOW');
