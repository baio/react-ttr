type Func<T> = () => T;

type Action = () => void;

export const CreateNew = ({onClick} : {onClick : Action}) =>
 <button onClick={e => { e.preventDefault(); onClick(); } } >Create new</button>