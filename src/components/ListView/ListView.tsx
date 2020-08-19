import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'

import { Boxes, styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface IScrollProps { }

const ListView: React.FC<IScrollProps> = ({ children }) => {
    return (
        <>
            <View style={styles.viewShortcut}>
                <Text style={styles.textShortcut}>atalhos</Text>
            </View>

            <View style={styles.viewContent}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={styles.scrollView}
                >
                    <Boxes>
                        <TouchableOpacity>
                            <View style={styles.boxIcon}>
                                <Icon name="barcode" type="antdesign" size={32} color="#ec7404" />
                                <Text style={styles.boxText}>pagar conta</Text>
                            </View>
                        </TouchableOpacity>
                    </Boxes>
                    <Boxes>
                        <TouchableOpacity>
                            <View style={styles.boxIcon}>
                                <Icon name="bank-transfer-in" type="material-community" size={32} color="#ec7404" />
                                <Text style={[styles.boxText, { textAlign: 'center' }]}>fazer transferências</Text>
                            </View>
                        </TouchableOpacity>
                    </Boxes>
                    <Boxes>
                        <TouchableOpacity>
                            <View style={styles.boxIcon}>
                                <Icon name="receipt" type="ionicons" size={32} color="#ec7404" />
                                <Text style={[styles.boxText, { textAlign: 'center' }]}>meus comprovantes</Text>
                            </View>
                        </TouchableOpacity>
                    </Boxes>
                    <Boxes>
                        <TouchableOpacity>
                            <View style={styles.boxIcon}>
                                <Icon name="add" type="ionicons" size={32} color="#ec7404" />
                                <Text style={styles.boxText}>personalizar</Text>
                            </View>
                        </TouchableOpacity>
                    </Boxes>
                </ScrollView>
            </View>
        </>
    )
}

export { ListView }