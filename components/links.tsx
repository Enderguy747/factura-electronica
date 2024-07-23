'use client'
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import {
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    ShoppingCart,
    Users2,
    ReceiptCent,
  
  } from "lucide-react"
  
 
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Input } from "@/components/ui/input"
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
  import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
  } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button";

function DesktopSideNav() {
    return (

        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            
                <TooltipProvider>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard"
                                className={clsx("flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8", {
                                    "bg-accent text-white": usePathname() === "/dashboard"
                                })}
                            >
                                <Home className="h-5 w-5" />
                                <span className="sr-only">Inicio</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Inicio</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/facturas"
                                className={clsx("flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8", {
                                    "bg-accent text-white": usePathname() === "/dashboard/facturas"
                                })}
                            >
                                <ReceiptCent className="h-5 w-5" />
                                <span className="sr-only">Facturas</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Facturacion</TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </nav>
        </aside>

    )
}



function MobileSideNav() {
    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:z-0 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 sm:justify-end sm: pt-5">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="#"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        >
                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <Home className="h-5 w-5" />
                            Inicio
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <ReceiptCent className="h-5 w-5" />
                            Facturar
                        </Link>
                      
                    
                    </nav>
                </SheetContent>
            </Sheet>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Users2>
                        <Button
                            variant="outline"
                            size="icon"
                            className="overflow-hidden rounded-full"
                        >
                        </Button>
                    </Users2>


                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>Cerrar Sesion</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}


export {
    DesktopSideNav,
    MobileSideNav
}