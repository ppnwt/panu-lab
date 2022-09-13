import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
} from '@chakra-ui/react'

import { lists } from "../utils/lists";

export default function BreadCrumb (){
  return (
    <VStack paddingTop="10px" spacing="2" alignItems="center">
      <Breadcrumb fontWeight="bold" fontSize='md'>
        {lists.map((tab) => 
          <BreadcrumbItem key={tab.id}>
            <BreadcrumbLink>{tab.label}</BreadcrumbLink>
          </BreadcrumbItem>
          )}
      </Breadcrumb>
    </VStack>
  )
};

