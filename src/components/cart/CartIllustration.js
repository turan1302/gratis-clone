import React from 'react';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../datas/colors';
import { CART_DECORATIONS } from '../../datas/cartData';

const CartIllustration = ({ styles }) => (
    <View style={styles.illustrationWrapper}>
        {CART_DECORATIONS.map((item, index) =>
            item.type === 'dot' ? (
                <View
                    key={index}
                    style={[
                        styles.decorDot,
                        {
                            top: item.top,
                            left: item.left,
                            right: item.right,
                            bottom: item.bottom,
                        },
                    ]}
                />
            ) : (
                <Text
                    key={index}
                    style={[
                        styles.decorPlus,
                        {
                            top: item.top,
                            left: item.left,
                            right: item.right,
                            bottom: item.bottom,
                        },
                    ]}
                >
                    {item.label}
                </Text>
            ),
        )}
        <View style={styles.illustrationBlob}>
            <Feather name="shopping-bag" size={52} color={COLORS.cartPrimaryLight} />
        </View>
    </View>
);

export default CartIllustration;
