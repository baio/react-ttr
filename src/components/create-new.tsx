export const CreateNew = ({onClick, x}) =>
    <button onClick={e => { e.preventDefault(); onClick(); } } >Create new</button>