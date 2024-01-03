import React from 'react'
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'

const tabs = ["About", "Qualifications", "Responsibilities"]


const JobDetails = () => {
    const params = useGlobalSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch('job-details', { job_id: params.id })

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, [])

    const displayTabContent = () => {
        switch (activeTab) {
            case "Qualifications":
                return (
                    <Specifics 
                        title='Qualifications'
                        // @ts-expect-error TS(2339): Property 'job_highlights' does not exist on type '... Remove this comment to see the full error message
                        points={data[0].job_highlights?.Qualifications ?? ['N/A']}
                    />
                )
            case "About":
                return (
                    <JobAbout 
                        // @ts-expect-error TS(2339): Property 'job_description' does not exist on type ... Remove this comment to see the full error message
                        info={data[0].job_description ?? 'N/A'}
                    />
                )
            case "Responsibilities":
                return (
                    <Specifics 
                        title='Responsibilities'
                        // @ts-expect-error TS(2339): Property 'job_highlights' does not exist on type '... Remove this comment to see the full error message
                        points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
                    />
                )
            default:
                break;
        }
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.lightWhite,
            }}
        >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension='60%'
                        />
                    ),
                    headerTitle: ''
                }}
            />
            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {isLoading ? (
                        <ActivityIndicator
                            size='large'
                            color={COLORS.primary}
                        />
                    ) : error ? (
                        <Text>{error}</Text>
                    ) : data.length === 0 ? (
                        <Text>No data found</Text>
                    ) : (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company
                                // @ts-expect-error TS(2339): Property 'employer_logo' does not exist on type 'n... Remove this comment to see the full error message
                                companyLogo={data[0].employer_logo}
                                // @ts-expect-error TS(2339): Property 'job_title' does not exist on type 'never... Remove this comment to see the full error message
                                jobTitle={data[0].job_title}
                                // @ts-expect-error TS(2339): Property 'employer_name' does not exist on type 'n... Remove this comment to see the full error message
                                companyName={data[0].employer_name}
                                // @ts-expect-error TS(2339): Property 'job_country' does not exist on type 'nev... Remove this comment to see the full error message
                                location={data[0].job_country}
                            />
                            <JobTabs
                                tabs={tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />

                            {displayTabContent()}
                        </View>
                    )}
                </ScrollView>

                <JobFooter 
                    // @ts-expect-error TS(2339): Property 'job_google_link' does not exist on type ... Remove this comment to see the full error message
                    url={data[0]?.job_google_link?? 'https://careers.google.com/jobs/results/'}
                />
            </>
        </SafeAreaView>
    )
}

export default JobDetails