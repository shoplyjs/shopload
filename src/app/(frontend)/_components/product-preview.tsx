import { Text } from "@medusajs/ui";
import Link from "next/link";
import PreviewPrice from "./price";
import Thumbnail from "./thumbnail";

export default async function ProductPreview({
    product,
    isFeatured,
}: {
    product: any;
    isFeatured?: boolean;
}) {
    const { price, originalPrice } = product.variants?.[0] || {};
    return (
        <Link href={`/products/${product.handle}`} className="group">
            <div data-testid="product-wrapper">
                <Thumbnail
                    thumbnail={product.variants[0]?.imageUrl}
                    images={product.images}
                    size="full"
                    isFeatured={isFeatured}
                />
                <div className="flex txt-compact-medium mt-4 justify-between">
                    <Text
                        className="text-ui-fg-subtle"
                        data-testid="product-title"
                    >
                        {product.title}
                    </Text>
                    <div className="flex items-center gap-x-2">
                        <PreviewPrice
                            currency={product.currency}
                            price={price}
                            originalPrice={originalPrice}
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}
