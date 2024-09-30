import { useEffect, useState } from "react";
import { ProductVariant, ProductVariantSize } from "./types";

export function useProductVariants(productVariants: ProductVariant[]) {
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
        () => productVariants[0] || null
    );

    const productVariantsByAroma = productVariants.reduce(
        (previousValue, currentValue) => {
            if (currentValue.aroma) {
                if (previousValue[currentValue.aroma]) {
                    previousValue[currentValue.aroma].push(currentValue);
                } else {
                    previousValue[currentValue.aroma] = [currentValue];
                }
            }
            return previousValue;
        },
        {} as Record<string, ProductVariant[]>
    );

    const productSizes = productVariants.reduce(
        (previousValue, currentValue) => {
            if (
                currentValue.size &&
                !previousValue.find((size) =>
                    isSameSize(size, currentValue.size)
                )
            ) {
                previousValue.push(currentValue.size);
            }
            return previousValue;
        },
        [] as ProductVariantSize[]
    );

    const productAromas = Object.keys(productVariantsByAroma);

    function getAromaSizes(aroma: string) {
        return (productVariantsByAroma[aroma] || []).map((variant) => variant.size);
    }

    function isSizeAvailable(size: ProductVariantSize) {
        return !getAromaSizes(selectedVariant?.aroma || "").find((aromaSize) =>
            isSameSize(aromaSize, size)
        );
    }

    function isSelectedAroma(aroma: string) {
        return selectedVariant?.aroma === aroma;
    }

    function selectAroma(aroma: string) {
        const aromaWithSameSize = productVariantsByAroma[aroma]?.find(
            (variant) => isSameSize(variant.size, selectedVariant?.size)
        );
        if (aromaWithSameSize) {
            setSelectedVariant(aromaWithSameSize);
        } else {
            setSelectedVariant(productVariantsByAroma[aroma]?.[0] || null);
        }
    }

    function selectSize(size: ProductVariantSize) {
        const foundVariant = productVariants.find(
            (variant) =>
                isSameSize(variant.size, size) &&
                variant.aroma === selectedVariant?.aroma
        );
        if (foundVariant) {
            setSelectedVariant(foundVariant);
        }
    }

    function isSelectedSize(size: ProductVariantSize) {
        return isSameSize(selectedVariant?.size, size);
    }

    function isSameSize(sizeA: ProductVariantSize, sizeB: ProductVariantSize) {
        return (
            sizeA.pieces === sizeB.pieces &&
            sizeA.total_services === sizeB.total_services &&
            sizeA.gram === sizeB.gram
        );

    }

    useEffect(()=>{
        setSelectedVariant(productVariants[0] || null)
    },[productVariants])

    return {
        selectedVariant,
        productAromas,
        setSelectedVariant,
        productSizes,
        isSelectedAroma,
        selectAroma,
        selectSize,
        isSelectedSize,
        isSizeAvailable,
    };
}
