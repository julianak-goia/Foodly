import { Product } from "@prisma/client";

export const calculateProductTotalPrice = (product: Product): number => {
    //se o produto nao tiver discontonretorna o valor total do produto
    if (product.discountPercentage === 0) {
        return Number(product.price)
    }

    // retorna o valor com desconto
    const discount = Number(product.price) * (product.discountPercentage / 100);

    return Number(product.price) - discount;
}


export const formatCurrency = (value: number): string => {
    return `R$ ${Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        minimumFractionDigits: 2,
    }).format(value)}`

}