import { Fragment, PropsWithChildren } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'

interface Props<ObjectType> {
  objects: ObjectType[]
  setSelected: (selected: ObjectType) => void
  selected: ObjectType
  property: keyof ObjectType
}

function MyListbox<ObjectType>({ objects, property, selected, setSelected }: PropsWithChildren<Props<ObjectType>>) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative mt-1'>
        <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary sm:text-sm'>
          <span className='block truncate'>{selected[property] as string}</span>
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <Icon icon='mdi:chevron-down' className='w-6 h-6 text-gray-400' aria-hidden='true' />
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
          <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {objects.map((object, objectIdx) => (
              <Listbox.Option
                key={objectIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-primary' : 'text-gray-900'
                  }`
                }
                value={object}>
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {object[property] as string}
                    </span>
                    {selected ? (
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-primary'>
                        <Icon icon='material-symbols:check' className='w-5 h-5' aria-hidden='true' />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default MyListbox
