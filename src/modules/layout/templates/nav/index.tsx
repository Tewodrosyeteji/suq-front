import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"
import JanLogo from "../../../../../public/JANLOGO1.png"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16   bg-[#013B94] ">
        <nav
          className=" flex mx-auto max-w-7xl p-6 lg:p-6 items-center justify-between "
          aria-label="Globla"
        >
          <div className="">
            <span className="sr-only">Jan.com</span>
            <LocalizedClientLink href="/" className="text-white ">
              {/* <Image src={JanLogo} height={14} width={80} alt="janlogo" /> */}
              JAN.COM
            </LocalizedClientLink>
          </div>
          <div className="">
            <div className="">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="">
              {/* {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                >
                  Search
                </LocalizedClientLink>
              )} */}
              <LocalizedClientLink className="" href="/account">
                Account
              </LocalizedClientLink>
            </div>

            <Suspense
              fallback={
                <LocalizedClientLink className="" href="/cart">
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
