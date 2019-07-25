import { IUser } from '../../model';
import userRoleRepository from '../../repository/user-role-repository';
import userAddressRepository from '../../repository/user-address-repository';
import fileRepository from '../../repository/file-repository';
import favoriteRepository from '../../repository/favorite-repository';
import basketRepository from '../../repository/basket-repository';
import { prepareBasket } from '../basket';
import { prepareFavorite } from '../favorite';

export const prepareUser = async (user: IUser) => {
    const role = await userRoleRepository.findById(user.userRole).then();
    const address = await userAddressRepository.findById(user.userAddress).then();
    const avatar = await fileRepository.findById(user.avatar).then();
    const favorite = await favoriteRepository.findById(user.favorite).then();
    const basket = await basketRepository.findById(user.basket).then();
    return {
        ...user,
        userRole: role,
        userAddress: address,
        avatar,
        favorite: prepareFavorite(favorite),
        basket: prepareBasket(basket)
    };
};
