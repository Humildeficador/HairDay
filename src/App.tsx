import { Logo } from '~/components/ui/Logo'
import { Text } from '~/components/ui/Text'
import { Title } from '~/components/ui/Title'

export function App() {
	return (
		<div className="container mx-auto">
			<Logo />
			<div className="p-3 grid grid-cols-3 gap-3">
				<div className="flex flex-col gap-3 items-center justify-center p-20 bg-gray-700 rounded-xl">
					<Text>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
						libero vero, similique rerum quos cum magnam est incidunt quas,
						ipsam rem, sed aut modi temporibus eligendi. Unde enim blanditiis
						eveniet.
					</Text>
				</div>
				<div className="col-span-2 flex flex-col items-center justify-center gap-8 px-28 py-20">
					<Components />
				</div>
			</div>
		</div>
	)
}

function Components() {
	return (
		<div className="flex flex-col">
			<Text size={'sm'}>Hello World!</Text>
			<Text>Hello World!</Text>
			<Title size={'sm'}>Hello World!</Title>
			<Title>Hello World!</Title>
			<Title size={'lg'}>Hello World!</Title>
		</div>
	)
}
