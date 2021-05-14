export default function elReducer(state, action) {
  const newState= {...state};
  console.log("El reducer recibe una accion", action.type)
  return newState;
}