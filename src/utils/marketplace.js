const GAS = 100000000000000;

export function getProducts() {
  return window.contract.getProducts();
}

export async function buyProduct({ id, price }) {
  console.log('id ptice', id, price);
  await window.contract.buyProduct(
    { pizzaId: id },
    GAS,
    price.toLocaleString('fullwide', { useGrouping: false }),
  );
}
