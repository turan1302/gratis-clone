import React, { useMemo, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../common/ScreenHeader';
import TabBar from '../common/TabBar';
import {
    CAMPAIGN_TABS,
    CAMPAIGN_TAB_ITEMS,
    GRATIS_CAMPAIGNS,
} from '../../datas/campaignsData';
import { createCampaignsStyles } from './styles';
import CampaignFilter from './CampaignFilter';
import CampaignCard from './CampaignCard';

const CampaignsContent = () => {
    const styles = useMemo(() => createCampaignsStyles(), []);
    const [activeTab, setActiveTab] = useState(CAMPAIGN_TABS.gratis);
    const [activeOnly, setActiveOnly] = useState(true);

    const campaigns = activeTab === CAMPAIGN_TABS.gratis ? GRATIS_CAMPAIGNS : [];

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScreenHeader title="Kampanyalar" />
            <TabBar tabs={CAMPAIGN_TAB_ITEMS} activeTab={activeTab} onTabChange={setActiveTab} />
            <CampaignFilter
                styles={styles}
                activeOnly={activeOnly}
                onToggle={() => setActiveOnly(prev => !prev)}
            />
            {campaigns.length > 0 ? (
                <FlatList
                    data={campaigns}
                    renderItem={({ item }) => <CampaignCard item={item} styles={styles} />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={styles.emptyState}>
                    <Text style={styles.emptyStateText}>Size özel kampanya bulunmuyor.</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default CampaignsContent;
