import React, {FC} from 'react';
import styles from './Header.module.css'
import Search from "../UI/Search/Search";
import SelectLabels from "../UI/Select/SelectLabels";
import {filtersStore} from '../../stores/filters'
import {observer} from "mobx-react-lite";




const HeaderComponent: FC = (): JSX.Element => {
    return (
        <div className={styles.header}>
            <div className={'container'}>
                <h1 className={styles.title}>
                    Search for Books
                </h1>
                <Search/>
                <div className={styles.select__wrapper}>
                    <SelectLabels
                        label={'Categories'}
                        values={filtersStore.categories}
                        activeValue={filtersStore.categoryActive}
                        changeValue={filtersStore.changeCategories}
                    />
                    <SelectLabels
                        label={'Sorting by'}
                        values={filtersStore.sorting}
                        activeValue={filtersStore.sortingActive}
                        changeValue={filtersStore.changeSorting}
                    />
                </div>
            </div>
        </div>
    );
};

export const Header = observer(HeaderComponent);
