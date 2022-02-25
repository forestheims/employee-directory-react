// const currentUser = getUser();
// console.log(currentUser);
// const [user, dispatch] = useReducer(
//   userReducer,
//   ''
//   // currentUser ? currentUser.user.email : ''
//   // getUser() ? getUser().user.email : ''
// );

// async function userReducer(user, action) {
//   switch (action.type) {
//     case 'signin':
//       try {
//         // const resp = await signInUser(action.payload);
//         user = action.payload.email;
//         history.replace('/');
//       } catch (error) {
//         // throw error;
//       } finally {
//         // loading?
//       }
//     case 'create':
//       try {
//         // const resp = await signUpUser(action.payload);
//         user = action.payload.email;
//         history.replace('/');
//       } catch (error) {
//         throw error;
//       } finally {
//         // loading?
//       }
//     case 'logout':
//       try {
//         // signOutUser();
//         user = '';
//       } catch (error) {
//         throw error;
//       } finally {
//         // loading?
//       }
//     default:
//       throw new Error();
//   }
// }

// const handleSignIn = (formState) => {
//   dispatch({ type: 'signin', payload: formState });
// };

// const handleCreateAccount = (formState) => {
//   dispatch({ type: 'create', payload: formState });
// };

// const handleLogOut = () => {
//   dispatch({ type: 'logout' });
// };
