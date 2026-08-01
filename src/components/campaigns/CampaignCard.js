import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CampaignCard = ({ item, styles }) => (
    <View style={styles.card}>
        <View style={styles.banner}>
            <Text style={styles.bannerTitle}>
                {item.title} <Text style={styles.bannerHighlight}>{item.titleHighlight}</Text>
            </Text>
            <View style={styles.bannerRow}>
                <Text style={[styles.bannerSubtitle, { flex: 1, marginTop: 0 }]}>
                    {item.subtitle}
                </Text>
                <View style={styles.bannerPhone}>
                    <Text style={styles.bannerPhoneText}>{item.phoneLabel}</Text>
                </View>
            </View>
        </View>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <View style={styles.cardActions}>
            <TouchableOpacity style={styles.primaryButton} activeOpacity={0.85}>
                <Text style={styles.primaryButtonText}>Görüntüle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.outlineButton} activeOpacity={0.85}>
                <Text style={styles.outlineButtonText} numberOfLines={1}>
                    Kampanya Detay...
                </Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default CampaignCard;
