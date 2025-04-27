import {StatusBar} from "expo-status-bar"
import {Tabs} from "expo-router"
import {TabBarIcon , TabBarLabel} from "@/components/tabBarItem"

const tabBarIconSize = 32

export default function TabsLayout() {
    return (
        <>
            <StatusBar style="light" backgroundColor="#161622"/>
            <Tabs 
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        minHeight: 80,
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                    },
                    tabBarItemStyle: {
                        flexDirection: "row",
                        alignItems: "flex-end",
                    },
                    tabBarActiveTintColor: "#ffa001",
                    tabBarInactiveTintColor: "#cdcde0",
                }}
            >
                <Tabs.Screen 
                    name="Home"
                    options={{
                        tabBarIcon: ({focused , color , size}) => {
                            return (
                                <TabBarIcon 
                                    name="home"
                                    focused={focused}
                                    color={color}
                                    size={tabBarIconSize}
                                />
                            )
                        },
                        tabBarLabel: ({focused , color , position , children}) => {
                            return (
                                <TabBarLabel
                                    focused={focused}
                                    color={color}
                                >
                                    {children}
                                </TabBarLabel>
                            )
                        }
                    }}
                />
                <Tabs.Screen 
                    name="Bookmark"
                    options={{
                        tabBarIcon: ({focused , color , size}) => {
                            return (
                                <TabBarIcon 
                                    name="bookmark"
                                    focused={focused}
                                    color={color}
                                    size={tabBarIconSize}
                                />
                            )
                        },
                        tabBarLabel: ({focused , color , position , children}) => {
                            return (
                                <TabBarLabel
                                    focused={focused}
                                    color={color}
                                >
                                    {children}
                                </TabBarLabel>
                            )
                        }
                    }}
                />
                <Tabs.Screen 
                    name="Create"
                    options={{
                        tabBarIcon: ({focused , color , size}) => {
                            return (
                                <TabBarIcon 
                                    name="plus"
                                    focused={focused}
                                    color={color}
                                    size={tabBarIconSize}
                                />
                            )
                        },
                        tabBarLabel: ({focused , color , position , children}) => {
                            return (
                                <TabBarLabel
                                    focused={focused}
                                    color={color}
                                >
                                    {children}
                                </TabBarLabel>
                            )
                        }
                    }}
                />
                <Tabs.Screen 
                    name="Profile"
                    options={{
                        tabBarIcon: ({focused , color , size}) => {
                            return (
                                <TabBarIcon 
                                    name="profile"
                                    focused={focused}
                                    color={color}
                                    size={tabBarIconSize}
                                />
                            )
                        },
                        tabBarLabel: ({focused , color , position , children}) => {
                            return (
                                <TabBarLabel
                                    focused={focused}
                                    color={color}
                                >
                                    {children}
                                </TabBarLabel>
                            )
                        }
                    }}
                />
            </Tabs>
        </>
    )
}