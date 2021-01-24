app.component("product-variants", {
    template:
    /*html*/
    `<div class="product-variants">
        <ul>
            <li
                v-for="(variant, variantIndex) in product.variants"
                :key="variant"
                @mouseover="selectVariant(productIndex, variantIndex)"
                class="color-circle"
                :style="{backgroundColor: variant.color}"
            ></li>
        </ul>
    </div>`
})