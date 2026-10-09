const risky = true;
const checks = [{ name: 'lint' }, { name: 'guard' }]; const active = checks;
const blocked = active.some((c) => c.name === 'guard' && risky);
console.log(blocked ? 'BLOCK' : 'ALLOW');
