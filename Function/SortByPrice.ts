import {foodManagement, readlineSync} from "../Main";
import {Food} from "../ObjectClass/Food";

export function SortByPrice() {
    let menu: string[] = ['ascending', 'descending'],
        index = readlineSync.keyInSelect(menu, 'Select option');
    switch (index) {
        case 0:
            foodManagement.menu.sort((a: Food, b: Food) => a.getPrice() - b.getPrice());
            console.log('Sorted by price from low to high!');
            break;
        case 1:
            foodManagement.menu.sort((a: Food, b: Food) => b.getPrice() - a.getPrice());
            console.log('Sorted by price from high to low!');
            break;
        default:
            foodManagement.sort();
    }
}