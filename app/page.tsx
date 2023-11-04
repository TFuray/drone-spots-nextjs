'use client'
import axios from 'axios'
import DisplayData from 'components/DisplayData'
import Header from 'components/Header'
import Map from 'components/Map/Map'
import SearchBar from 'components/SearchBar'
import SideBar from 'components/SideBar'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { WeatherData } from 'types/weather'
import { ThemeProvider } from '@rewind-ui/core'
import { ClassProp } from 'class-variance-authority/dist/types'
import WeatherBar from 'components/WeatherBar'

export default function Page() {



  const mapHeight = '680px'
  const MapWithNoSSR = dynamic(() => import('components/Map/Map'), {
    ssr: false
  })
  return (
    <ThemeProvider value={{
      theme: {
        components: {
          Accordion: {
            base: function (props?: ({ color?: 'white' | 'gray' | 'slate' | 'zinc' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; shadowColor?: 'gray' | 'slate' | 'zinc' | 'none' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; tone?: 'solid' | 'light' | 'transparent' | null | undefined; bordered?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            body: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; bordered?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            header: function (props?: ({ activeColor?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; state?: 'active' | 'inactive' | null | undefined; tone?: 'solid' | 'light' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined; bordered?: boolean | null | undefined; withRing?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            icon: function (props?: ({ state?: 'active' | 'inactive' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Alert: {
            base: function (props?: ({ tone?: 'solid' | 'light' | 'outline' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; accent?: 'none' | 'top' | 'right' | 'bottom' | 'left' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; shadowColor?: 'white' | 'gray' | 'none' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            infoWrapper: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            iconWrapper: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            },
            dismissIcon: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            title: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; tone?: 'solid' | 'light' | 'outline' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            text: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Avatar: {
            base: function (props?: ({ tone?: 'solid' | 'light' | 'outline' | 'glossy' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xl' | 'xs' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; shadowColor?: 'white' | 'gray' | 'none' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; outlined?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            status: function (props?: ({ position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xl' | 'xs' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; status?: 'online' | 'offline' | 'busy' | 'away' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            image: function (props?: ({ radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            group: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Badge: function (props?: ({ tone?: 'solid' | 'light' | 'outline' | 'glossy' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; shadowColor?: 'white' | 'gray' | 'none' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
            throw new Error('Function not implemented.')
          },
          Breadcrumbs: {
            anchor: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            },
            base: function (props?: ({ color?: 'gray' | 'slate' | 'zinc' | null | undefined; size?: 'base' | 'sm' | 'md' | 'lg' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            item: function (props?: ({ color?: 'gray' | 'slate' | 'zinc' | 'dark' | null | undefined; isLink?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Button: {
            base: function (props?: ({ tone?: 'solid' | 'light' | 'transparent' | 'outline' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; animation?: 'none' | 'pulse' | 'bounce' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; shadowColor?: 'white' | 'gray' | 'none' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; icon?: boolean | null | undefined; loading?: boolean | null | undefined; disabled?: boolean | null | undefined; withRing?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            chevron: function (props?: ({ open?: boolean | null | undefined; chevronRotation?: boolean | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            spinner: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Card: {
            base: function (props?: ({ bordered?: boolean | null | undefined; color?: 'white' | 'gray' | 'slate' | 'zinc' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; withDivider?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            body: function (props?: ({ size?: 'base' | 'sm' | 'md' | 'lg' | null | undefined; withDivider?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            footer: function (props?: ({ size?: 'base' | 'sm' | 'md' | 'lg' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            header: function (props?: ({ size?: 'base' | 'sm' | 'md' | 'lg' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            image: function (props?: ({ radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Checkbox: {
            base: function (props?: ({ color?: 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; tone?: 'solid' | 'light' | null | undefined; validation?: 'valid' | 'invalid' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; withRing?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            description: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            error: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            label: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Combobox: {
            base: function (props?: ({ color?: 'gray' | 'blue' | 'purple' | 'dark' | 'black' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; tone?: 'solid' | 'light' | 'transparent' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined; hasLeftIcon?: boolean | null | undefined; hasRightIcon?: boolean | null | undefined; hasLeftElement?: boolean | null | undefined; hasRightElement?: boolean | null | undefined; validation?: 'none' | 'valid' | 'invalid' | 'warning' | null | undefined; withRing?: boolean | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            input: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            group: function (props?: ({ hidden?: boolean | null | undefined; mode?: 'tight' | 'spacey' | null | undefined; weight?: 'bold' | 'light' | 'black' | 'thin' | 'extraLight' | 'normal' | 'medium' | 'semiBold' | 'extraBold' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            icon: function (props?: ({ tone?: 'solid' | 'light' | 'transparent' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            leftIconWrapper: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            list: function (props?: ({ open?: boolean | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; mode?: 'tight' | 'spacey' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            noResults: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            rightIconWrapper: function (props?: ({ color?: 'gray' | 'blue' | 'purple' | 'dark' | 'black' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            wrapper: function (props?: ({ disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            tag: function (props?: ({ disabled?: boolean | null | undefined; tone?: 'solid' | 'light' | 'transparent' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            tagWrapper: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            tagButton: function (props?: ({ disabled?: boolean | null | undefined; color?: 'gray' | 'blue' | 'purple' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            tagButtonIcon: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          ComboboxOption: {
            button: function (props?: ({ hidden?: boolean | null | undefined; optionColor?: 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; mode?: 'tight' | 'spacey' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; selected?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            description: function (props?: ({ disabled?: boolean | null | undefined; selected?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            icon: function (props?: ({ tone?: 'solid' | 'light' | 'transparent' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            infoWrapper: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            },
            label: function (props?: ({ disabled?: boolean | null | undefined; selected?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            optionIcon: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            optionWrapper: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Drawer: function (props?: ({ shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; position?: 'top' | 'right' | 'bottom' | 'left' | null | undefined } & ClassProp) | undefined): string {
            throw new Error('Function not implemented.')
          },
          Dropdown: {
            arrow: function (props?: ({ color?: 'white' | 'gray' | 'slate' | 'zinc' | null | undefined; arrowSide?: 'top' | 'right' | 'bottom' | 'left' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            base: function (props?: ({ open?: boolean | null | undefined; arrowSide?: 'top' | 'right' | 'bottom' | 'left' | null | undefined; mode?: 'tight' | 'spacey' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; color?: 'white' | 'gray' | 'slate' | 'zinc' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            content: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            divider: function (props?: ({ /* <div className='w-1/2 bg-neutral border-4 rounded-[2.3rem] mr-2 shadow-2xl'>
                  <div className='float-right'>
                    <Link href='/posts/create' className=''>
                      <button className='btn btn-info rounded-3xl'>
                        Add
                        <br /> Spot
                      </button>
                    </Link>
                  </div>
                  <SideBar />
                </div> */ color?: 'gray' | 'slate' | 'dark' | null | undefined
            } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            item: function (props?: ({ tone?: 'solid' | 'light' | null | undefined; mode?: 'tight' | 'spacey' | null | undefined; color?: 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            label: function (props?: ({ mode?: 'tight' | 'spacey' | null | undefined; color?: 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; weight?: 'bold' | 'light' | 'black' | 'thin' | 'extraLight' | 'normal' | 'medium' | 'semiBold' | 'extraBold' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          FormControl: {
            base: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            },
            label: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; required?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            text: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; validation?: 'none' | 'valid' | 'invalid' | 'warning' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Image: {
            base: function (props?: ({ fit?: 'fill' | 'none' | 'contain' | 'cover' | 'scale-down' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | '2xl' | '3xl' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            caption: function (props?: ({ mode?: 'light' | 'dark' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            wrapper: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Input: {
            base: function (props?: ({ color?: 'gray' | 'blue' | 'purple' | 'dark' | 'black' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; tone?: 'solid' | 'light' | 'transparent' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | null | undefined; hasLeftIcon?: boolean | null | undefined; hasRightIcon?: boolean | null | undefined; type?: 'number' | 'search' | 'time' | 'text' | 'color' | 'datetime-local' | 'date' | 'email' | 'file' | 'password' | 'range' | 'tel' | null | undefined; validation?: 'none' | 'valid' | 'invalid' | 'warning' | null | undefined; withRing?: boolean | null | undefined; loading?: boolean | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            wrapper: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            },
            icon: function (props?: ({ tone?: 'solid' | 'light' | 'transparent' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            leftIconWrapper: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            rightIconWrapper: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          InputGroup: {
            base: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            text: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; tone?: 'solid' | 'light' | 'transparent' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Modal: function (props?: ({ mode?: 'dialog' | 'fullscreen' | null | undefined; color?: 'white' | 'gray' | 'slate' | 'zinc' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; size?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'screen' | null | undefined; position?: 'center' | 'top' | 'bottom' | null | undefined } & ClassProp) | undefined): string {
            throw new Error('Function not implemented.')
          },
          Overlay: function (props?: ({ opacity?: '25' | '50' | '75' | null | undefined; open?: boolean | null | undefined; color?: 'white' | 'gray' | 'dark' | null | undefined; blur?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined } & ClassProp) | undefined): string {
            throw new Error('Function not implemented.')
          },
          Popover: {
            arrow: function (props?: ({ color?: 'white' | 'gray' | 'slate' | 'zinc' | null | undefined; arrowSide?: 'top' | 'right' | 'bottom' | 'left' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            base: function (props?: ({ open?: boolean | null | undefined; arrowSide?: 'top' | 'right' | 'bottom' | 'left' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | 'tight' | null | undefined; color?: 'white' | 'gray' | 'slate' | 'zinc' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Progress: {
            base: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            bar: function (props?: ({ color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            description: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            label: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            wrapper: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            stripe: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Radio: {
            base: function (props?: ({ color?: 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; tone?: 'solid' | 'light' | null | undefined; validation?: 'valid' | 'invalid' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; withRing?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            description: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            error: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            label: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            group: function (props?: ({ orientation?: 'vertical' | 'horizontal' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Ribbon: function (props?: ({ clipped?: boolean | null | undefined; tone?: 'solid' | 'light' | 'glossy' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; position?: 'right' | 'left' | 'top-right' | 'top-left' | null | undefined; size?: 'sm' | 'md' | 'lg' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; shadowColor?: 'white' | 'gray' | 'none' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
            throw new Error('Function not implemented.')
          },
          Select: {
            base: function (props?: ({ color?: 'gray' | 'blue' | 'purple' | 'dark' | 'black' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; tone?: 'solid' | 'light' | 'transparent' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | null | undefined; hasLeftIcon?: boolean | null | undefined; validation?: 'none' | 'valid' | 'invalid' | 'warning' | null | undefined; withRing?: boolean | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            wrapper: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            },
            icon: function (props?: ({ tone?: 'solid' | 'light' | 'transparent' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            leftIconWrapper: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            rightIconWrapper: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Selector: {
            base: function (props?: ({ color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; tone?: 'solid' | 'light' | null | undefined; initialRun?: boolean | null | undefined; withAnimation?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            separator: function (props?: ({ orientation?: 'vertical' | 'horizontal' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            tab: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; tone?: 'solid' | 'light' | null | undefined; active?: boolean | null | undefined; orientation?: 'vertical' | 'horizontal' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            wrapper: function (props?: ({ radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; orientation?: 'vertical' | 'horizontal' | null | undefined; fullWidth?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Sidebar: {
            base: function (props?: ({ color?: 'white' | 'gray' | 'slate' | 'zinc' | 'dark' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; expanded?: boolean | null | undefined; hovered?: boolean | null | undefined; mobile?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            head: function (props?: ({ mobile?: boolean | null | undefined; color?: 'white' | 'gray' | 'slate' | 'zinc' | 'dark' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            headTitle: function (props?: ({ opened?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            headLogo: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            },
            headToggle: function (props?: ({ color?: 'white' | 'gray' | 'slate' | 'zinc' | 'dark' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            headToggleIcon: function (props?: ({ expanded?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            nav: function (props?: ({ color?: 'white' | 'gray' | 'slate' | 'zinc' | 'dark' | null | undefined; opened?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            navSection: function (props?: ({ isChild?: boolean | null | undefined; color?: 'white' | 'gray' | 'slate' | 'zinc' | 'dark' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            navSectionTitle: function (props?: ({ color?: 'white' | 'gray' | 'slate' | 'zinc' | 'dark' | null | undefined; opened?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            navSectionItemWrapper: function (props?: ({ opened?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            navSectionItem: function (props?: ({ color?: 'white' | 'gray' | 'slate' | 'zinc' | 'dark' | null | undefined; active?: boolean | null | undefined; expanded?: boolean | null | undefined; opened?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            navSectionItemIcon: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            },
            navSectionItemLabelWrapper: function (props?: ({ opened?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            navSectionItemLabel: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            },
            navSectionItemCollapseIcon: function (props?: ({ collapsed?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            separator: function (props?: ({ color?: 'white' | 'gray' | 'slate' | 'zinc' | 'dark' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            footer: function (props?: ({ color?: 'white' | 'gray' | 'slate' | 'zinc' | 'dark' | null | undefined; mobile?: boolean | null | undefined; expanded?: boolean | null | undefined; hovered?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Spinner: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined } & ClassProp) | undefined): string {
            throw new Error('Function not implemented.')
          },
          Switch: {
            base: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; color?: 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; state?: 'active' | 'inactive' | null | undefined; withRing?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            description: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            error: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            inner: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; state?: 'active' | 'inactive' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            label: function (props?: ({ size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Table: {
            wrapper: function (props?: ({ borderStyle?: 'solid' | 'dashed' | null | undefined; outerBorders?: boolean | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            table: function (props?: ({ radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined; size?: 'sm' | 'md' | 'lg' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            tbody: function (props?: ({ borderStyle?: 'solid' | 'dashed' | null | undefined; size?: 'sm' | 'md' | 'lg' | null | undefined; horizontalBorders?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            tfoot: function (props?: ({ borderStyle?: 'solid' | 'dashed' | null | undefined; size?: 'sm' | 'md' | 'lg' | null | undefined; footerBorders?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            thead: function (props?: ({ borderStyle?: 'solid' | 'dashed' | null | undefined; size?: 'sm' | 'md' | 'lg' | null | undefined; headerBorders?: boolean | null | undefined; headerColor?: 'white' | 'gray' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            tr: function (props?: ({ borderStyle?: 'solid' | 'dashed' | null | undefined; verticalBorders?: boolean | null | undefined; hoverable?: boolean | null | undefined; striped?: boolean | null | undefined; stripePosition?: 'even' | 'odd' | null | undefined; color?: 'white' | 'gray' | 'none' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            td: function (props?: ({ size?: 'sm' | 'md' | 'lg' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            th: function (props?: ({ size?: 'sm' | 'md' | 'lg' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Tabs: {
            wrapper: function (props?: ({ fullWidth?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            tab: function (props?: ({ tone?: 'line' | 'pill' | null | undefined; color?: 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; state?: 'active' | 'inactive' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; size?: 'sm' | 'md' | 'lg' | null | undefined; fullWidth?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            list: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Text: function (props?: ({ color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; leading?: 'none' | 'tight' | 'normal' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'snug' | 'relaxed' | 'loose' | null | undefined; size?: 'base' | 'sm' | 'lg' | 'xl' | 'xs' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | null | undefined; tracking?: 'tight' | 'normal' | 'tighter' | 'wide' | 'wider' | 'widest' | null | undefined; weight?: 'bold' | 'light' | 'black' | 'thin' | 'extraLight' | 'normal' | 'medium' | 'semiBold' | 'extraBold' | null | undefined } & ClassProp) | undefined): string {
            throw new Error('Function not implemented.')
          },
          Textarea: function (props?: ({ color?: 'gray' | 'blue' | 'purple' | 'dark' | 'black' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; tone?: 'solid' | 'light' | 'transparent' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | null | undefined; validation?: 'none' | 'valid' | 'invalid' | 'warning' | null | undefined; withRing?: boolean | null | undefined; disabled?: boolean | null | undefined } & ClassProp) | undefined): string {
            throw new Error('Function not implemented.')
          },
          Tooltip: {
            arrow: function (props?: ({ tone?: 'solid' | 'light' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            base: function (props?: ({ open?: boolean | null | undefined; tone?: 'solid' | 'light' | null | undefined; arrowSide?: 'top' | 'right' | 'bottom' | 'left' | null | undefined; size?: 'sm' | 'md' | 'lg' | 'xs' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'full' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          },
          Toast: {
            container: function (props?: ({ position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            toast: function (props?: ({ tone?: 'solid' | 'light' | 'minimal' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined; radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined; shadow?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined; shadowColor?: 'white' | 'gray' | 'none' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            progress: function (props?: ({ tone?: 'solid' | 'light' | 'minimal' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            progressInner: function (props?: ({ tone?: 'solid' | 'light' | 'minimal' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            contentWrapper: function (props?: ({ closeOnClick?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            content: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            },
            title: function (props?: ClassProp | undefined): string {
              throw new Error('Function not implemented.')
            },
            description: function (props?: ({ hasTitle?: boolean | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            actionsWrapper: function (props?: ({ tone?: 'solid' | 'light' | 'minimal' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            },
            action: function (props?: ({ primary?: boolean | null | undefined; tone?: 'solid' | 'light' | 'minimal' | null | undefined; color?: 'white' | 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'dark' | 'black' | null | undefined } & ClassProp) | undefined): string {
              throw new Error('Function not implemented.')
            }
          }
        }
      }
    }} >
      {/* <div className='flex flex-col items-center mb-5 text-black prose prose-xl prose-p:bold max-w-none '>
        <Header>Drone Map</Header>
        <p className=''>#1 Resource to find new places to fly</p>
      </div> */}
      <div className='w-1/3 mx-auto mb-5 mt-10'>
        <WeatherBar/>
        <SearchBar />
      </div>
      <div className=''>
        <div className='w-1/2 float-left bg-neutral border-4 rounded-[2.3rem] mr-2 shadow-2xl'>
          {/* <div className=''>
            <Link href='/posts/create' className=''>
              <button className='btn btn-info rounded-3xl'>
                Add
                <br /> Spot
              </button>
            </Link>
          </div> */}
          {/* <SideBar /> */}
        </div>
        <div
          className='min-w-full min-h-full static'
          id='map'
          style={{ height: "100vh" }}
        >
          <MapWithNoSSR />
        </div>
        {/* <div
          className='absolute left-2/3 w-1/4 z-40 drop-shadow-2xl bg-transparent  mr-2 '
          style={{ height: mapHeight }}
        >
          <SideBar />
        </div> */}
      </div>
    </ThemeProvider>
  )
}

{
  /* </div>
      <Link href='/posts' className='btn btn-ghost underline'>
        Find Spots
      </Link>
      <Link href='/search' className='btn btn-ghost underline'>
        Search By Location
      </Link> */
}
