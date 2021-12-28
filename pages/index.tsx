import commerce from '@lib/api/commerce'
import { Banner, Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Marquee, Hero } from '@components/ui'
import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
  categories,
  brands,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Banner></Banner>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      <Hero
        headline=" Nosotros"
        description="
        Somos una tienda de artículos de colección y juegos dedicada a la compra, venta y difusión de TCG (Trading Card Games) enfocada en Pokemon. "
      />
      <HomeAllProductsGrid
        products={products}
        categories={categories}
        brands={brands}
      />
    </>
  )
}

Home.Layout = Layout
