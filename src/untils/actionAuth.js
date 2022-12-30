import { roles } from "./constant"


export const canMaintain = (products) => {
    if (products.length === 0) return false
    return products.every((product) => {
        const holders = product.holders
        return !holders.nowAt && !holders.willAt
    })
}

export const canRecall = (products) => {
    if (products.length === 0) return false
    return products.every((product) => {
        const holders = product.holders
        return !holders.nowAt && !holders.willAt
    })
}

export const canReturn = (products, account) => {
    if (products.length === 0) return false
    return products.every((product) => {
        const holders = product.holders
        const isSold = holders.customer
        const isIn = holders?.nowAt && holders?.nowAt.id === account.id
        const isShipping = holders?.nowAt && holders?.willAt
        return isSold && isIn && !isShipping
    })
}

export const canPurchase = (products, account) => {
    if (products.length === 0 || products.length > 1) return false
    return products.every((product) => {
        const holders = product.holders
        const isSold = holders.customer
        const isIn = holders?.nowAt && holders?.nowAt.id === account.id
        const isShipping = holders?.nowAt && holders?.willAt
        return !isSold && isIn && !isShipping
    })
}

export const canExport = (products, account) => {
    if (products.length === 0) return false
    return products.every((product) => {
        const holders = product.holders
        // Product already sold and now at factory due to error or recall
        const isEndLife = holders?.nowAt && holders?.nowAt.role === roles.FACTORY && holders?.customer

        // Product can be now shipping and not in partner
        const isShipping = holders?.nowAt && holders?.willAt

        // Product is now at partner
        const isIn = holders?.nowAt && holders?.nowAt.id === account.id

        return !isEndLife && !isShipping && isIn
    })
}

export const canConfirm = (products, account) => {
    if (products.length === 0) return false
    return products.every((product) => {
        const holders = product.holders
        return holders?.willAt && holders.willAt.id === account.id
    })
}