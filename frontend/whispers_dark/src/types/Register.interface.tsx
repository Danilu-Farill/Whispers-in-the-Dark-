export interface IUser {
  email: string;
  password: string;
}

export interface IRegisterProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  onCreate: () => void;
}

// export interface IRegisterProps {
//   email: string;
//   password: string;
// }


export interface ILoginProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  onLogin: () => void;
}

export interface IStory {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  setImageUrl: (value: string) => void;
  setCategory: (value: string) => void;
}

export interface IHomeProps {
  user: IUser;
  onLogout: () => void;
}

// export interface IButtonProps {
//   children: React.ReactNode;
//   onCreate: () => void;
// }