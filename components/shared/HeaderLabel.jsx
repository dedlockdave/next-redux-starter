import SmolLabel from './SmolLabel'

export function HeaderLabel({ header, info }) {
    return (
        <div className="mb-8 p-0 text-lg text-center">
            <h1 className="my-4">{header}</h1>
            <SmolLabel>{info}</SmolLabel>
        </div>
    )
}