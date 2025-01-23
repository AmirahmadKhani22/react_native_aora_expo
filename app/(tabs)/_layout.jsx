import {StatusBar} from "expo-status-bar"
import {Tabs} from "expo-router"
import {TabBarIcon , TabBarLabel} from "@/components/tabBarItem"

export default function TabsLayout() {
    return (
        <>
            <StatusBar style="light" backgroundColor="#161622"/>
            <Tabs 
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        minHeight: 85,
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533"
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
                        TabBarIcon: ({focused , color , size}) => {
                            return (
                                <TabBarIcon 
                                    name=""
                                    focused={focused}
                                    color={color}
                                    size={size}
                                />
                            )
                        },
                        TabBarLabel: ({focused , color , position , children}) => {
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
                        TabBarIcon: ({focused , color , size}) => {
                            return (
                                <TabBarIcon 
                                    name=""
                                    focused={focused}
                                    color={color}
                                    size={size}
                                />
                            )
                        },
                        TabBarLabel: ({focused , color , position , children}) => {
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
                        TabBarIcon: ({focused , color , size}) => {
                            return (
                                <TabBarIcon 
                                    name=""
                                    focused={focused}
                                    color={color}
                                    size={size}
                                />
                            )
                        },
                        TabBarLabel: ({focused , color , position , children}) => {
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
                        TabBarIcon: ({focused , color , size}) => {
                            return (
                                <TabBarIcon 
                                    name=""
                                    focused={focused}
                                    color={color}
                                    size={size}
                                />
                            )
                        },
                        TabBarLabel: ({focused , color , position , children}) => {
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