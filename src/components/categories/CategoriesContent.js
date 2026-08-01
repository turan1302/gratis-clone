import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../common/SearchBar';
import TabBar from '../common/TabBar';
import {
    CATEGORY_TABS,
    CATEGORY_TAB_ITEMS,
    CATEGORIES,
} from '../../datas/categoriesData';
import { createCategoriesStyles } from './styles';
import CategorySplitView from './CategorySplitView';
import BrandsPlaceholder from './BrandsPlaceholder';

const CategoriesContent = () => {
    const styles = useMemo(() => createCategoriesStyles(), []);
    const [activeTab, setActiveTab] = useState(CATEGORY_TABS.categories);
    const [selectedCategoryId, setSelectedCategoryId] = useState(CATEGORIES[0].id);

    const selectedCategory =
        CATEGORIES.find(category => category.id === selectedCategoryId) ?? CATEGORIES[0];

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <SearchBar variant="bordered" />
            <TabBar tabs={CATEGORY_TAB_ITEMS} activeTab={activeTab} onTabChange={setActiveTab} />
            {activeTab === CATEGORY_TABS.categories ? (
                <CategorySplitView
                    styles={styles}
                    selectedCategoryId={selectedCategoryId}
                    onSelectCategory={setSelectedCategoryId}
                    selectedCategory={selectedCategory}
                />
            ) : (
                <BrandsPlaceholder styles={styles} />
            )}
        </SafeAreaView>
    );
};

export default CategoriesContent;
