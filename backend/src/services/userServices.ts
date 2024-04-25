// service creates the source of truth of the interface it receives
// -> database schema based on the

// there has to be 2 source of truths if i want these to be decoupled
// so i keep them coupled(?)

import { User, UserRepository } from "../data/entity/user.entity";

const verifyUserCombo = async (
  userData: User,
  userRepository: UserRepository
) => {
  const foundUser = await userRepository.findOne({
    where: {
      id: userData.id,
    },
  });

  return foundUser;
};
