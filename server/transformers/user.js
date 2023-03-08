export const userTransformer = (user) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    profileImage: user.profileImage,
  };
  
};