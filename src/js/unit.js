export function healthColor(objUnit) {
    if (objUnit.health > 50) {
        return 'healthy';
    } if (objUnit.health >= 15 && objUnit.health <= 50) {
        return 'wounded';
    }
    return 'critical';
}