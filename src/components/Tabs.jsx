import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
} from '@chakra-ui/react'

export function Tabs (){
 return (
   <>
    <VStack paddingTop="5px" spacing="2" alignItems="flex-end">
    <Breadcrumb fontWeight='medium' fontSize='lg'>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Data Knowledge</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Proof Of Concepts</BreadcrumbLink>
      </BreadcrumbItem>

      
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Portfolio</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Blog</BreadcrumbLink>
      </BreadcrumbItem>

    </Breadcrumb>
    </VStack>
   </>
 )
};

