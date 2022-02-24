import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  Tab,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react';

import { Page } from '../components';
import { UsersGridContainer } from '../containers/admin';
import AuthGuard from '../guards/AuthGuard';
import { AdminUserInfo, useUserinfo } from '../hooks';
import Layout from '../layout/Layout';
import type { NextPage } from '../types/next';

const ProjectSelector: FunctionComponent<{
  value: string;
  ids: string[];
  onChange: SelectProps<string>['onChange'];
}> = function ({ value, ids, onChange }) {
  function getContent() {
    return (
      <Select
        value={value ?? 'not-set'}
        label="Project"
        onChange={onChange}
        sx={{ padding: 0.1, borderRadius: 4 }}
      >
        {!ids && <MenuItem value="not-set">Loading...</MenuItem>}
        {ids &&
          ids.map((id) => (
            <MenuItem key={id} value={id}>
              Project #{id}
            </MenuItem>
          ))}
      </Select>
    );
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Project</InputLabel>
      {getContent()}
    </FormControl>
  );
};

const Admin: NextPage = function () {
  const { push } = useRouter();
  const { data: userinfo, isLoading, isSuccess } = useUserinfo();
  const [curPage, setCurPage] = useState('1');

  const resultsUrl = 'https://app.cumul.io/s/uhasselt-imob-1pqdvyb2ltvmrfjy';

  useEffect(() => {
    if (!isSuccess) {
      return;
    }
    if (!userinfo?.isAdmin) {
      // noinspection JSIgnoredPromiseFromCall
      push('/');
    }
  }, [push, userinfo]);

  const projectIds = (userinfo as AdminUserInfo)?.projects?.map(
    (project: { project_id: string }) => project.project_id,
  );

  const [projectId, setProjectId] = useState<string | undefined>(
    projectIds ? projectIds[0] : undefined,
  );

  useEffect(() => {
    if (isSuccess && projectIds) {
      setProjectId(projectIds[0]);
    }
  }, [userinfo, isSuccess, projectIds]);

  if (!projectId) {
    // eslint-disable-next-line unicorn/no-null
    return null;
  }

  const handleChange = (event: any, newValue: any) => {
    setCurPage(newValue);
  };

  return (
    <Page title="Admin">
      <TabContext value={curPage}>
        <Box
          sx={{
            borderBottom: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'divider',
            color: 'white',
          }}
          pt={3}
        >
          <TabList onChange={handleChange} aria-label="Select">
            <Tab
              label="Users"
              value="1"
              sx={{
                color: 'white',
              }}
            />
            <Tab
              label="Results"
              value="2"
              sx={{
                color: 'white',
              }}
            />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{
            width: '100%',
            height: 'calc(100% - 73px)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <AnimatePresence>
              <Box
                sx={{
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'center',
                  width: '100%',
                  padding: 5,
                  borderRadius: 4,
                }}
              >
                {isLoading && <CircularProgress />}
                {!isLoading && projectId && projectIds && (
                  <motion.div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Box sx={{ marginBottom: 3 }}>
                      <ProjectSelector
                        value={projectId}
                        ids={projectIds}
                        onChange={(v) => setProjectId(v.target.value)}
                      />
                    </Box>
                    <Box sx={{ flexGrow: 1, height: 'auto' }}>
                      <UsersGridContainer projectId={projectId} />
                    </Box>
                  </motion.div>
                )}
              </Box>
            </AnimatePresence>
          </Box>
        </TabPanel>
        <TabPanel
          value="2"
          sx={{
            width: '100%',
            height: 'calc(100% - 73px)',
          }}
        >
          <Box component="iframe" src={resultsUrl} sx={{ width: '100%', height: '100%' }} />
        </TabPanel>
      </TabContext>
    </Page>
  );
};

Admin.getLayout = (page) => {
  return (
    <AuthGuard>
      <Layout>{page}</Layout>
    </AuthGuard>
  );
};

export default Admin;
